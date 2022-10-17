#!/bin/sh
cd ../../../../../../plugins/generic/citations
if [[ -L "CitationsPlugin.inc.php" ]]
then
  echo "CitationsPlugin.inc.php is a symlink (already modded)"
else
  mv -n CitationsPlugin.inc.php CitationsPlugin.inc.php.orig
  ln -s ../../themes/master/plugins/generic/citations/CitationsPlugin.inc.php
  echo "modded CitationsPlugin.inc.php with symlink and backed up original to citations.js.orig"
fi

cd js

if [[ -L "citations.js" ]]
then
  echo "citations.js is a symlink (already modded)"
else
  mv -n citations.js citations.js.orig
  ln -s ../../../themes/master/plugins/generic/citations/js/citations.js
  echo "modded citations.js with symlink and backed up original to citations.js.orig"
fi
