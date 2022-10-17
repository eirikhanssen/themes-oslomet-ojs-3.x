#!/bin/sh
cd ../../../../../../plugins/generic/citations


if [[ -L "CitationsPlugin.inc.php" ]]
then
  if [[ -f "CitationsPlugin.inc.php.orig" ]]
  then
    # remove the symlink
    rm -i CitationsPlugin.inc.php
    # restore the original from backup
    mv -i CitationsPlugin.inc.php.orig CitationsPlugin.inc.php
    echo "restored CitationsPlugin.inc.php"
  else
    echo "no such file: CitationsPlugin.inc.php.orig"
  fi
else
  echo "CitationsPlugin.inc.php is not a symlink"
  if [[ -f "CitationsPlugin.inc.php" ]]
  then
    echo "CitationsPlugin.inc.php is already restored"
  fi
fi

cd js/

if [[ -L "citations.js" ]]
then
  if [[ -f "citations.js.orig" ]]
  then
    # remove the symlink
    rm -i citations.js
    # restore the original from backup
    mv -i citations.js.orig citations.js
    echo "restored citations.js"
  else
    echo "no such file: citations.js.orig"
  fi
else
  echo "citations.js is not a symlink"
  if [[ -f "citations.js" ]]
  then
    echo "citations.js is already restored"
  fi
fi
