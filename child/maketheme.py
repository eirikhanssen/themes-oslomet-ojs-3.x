import re
import os
import sys
import shutil
from datetime import datetime
import subprocess
import glob

def main():
    print("Create a new child theme that inherits from master (and default)\n")
    response = input("Enter theme name (allowed characters: [a-zA-Z_0-9]):\n")
    themename = re.sub('[^a-zA-Z_0-9]', '' , response)
    themeslug = themename.lower()

    print("Theme name: %s\nTheme slug: %s\n" % (themename, themeslug))

    confirm = input("Create this theme? (Y/N)\n")

    confirm = confirm.lower()

    if confirm == 'y':
        makeTheme(themename, themeslug)
    else:
        print("Aborting")   

def makeTheme(name,slug):
    # check if this path already exists
    childpath = os.path.abspath(os.getcwd())
    themespath = os.path.abspath(os.path.join('..',name)) 
    newthemepath = os.path.abspath(os.path.normpath(os.path.join('..',slug)))
    if os.path.exists(newthemepath):
        sys.exit("Sorry, %s already exists. Aborting.\n" % newthemepath)
    else:
        newthemepluginname = name + "ThemePlugin.inc.php"
        shutil.copytree(childpath, newthemepath)
        os.remove(os.path.join(newthemepath,'maketheme.py'))
        os.rename(os.path.join(newthemepath,'ChildThemePlugin.inc.php'), os.path.join(newthemepath,newthemepluginname))
        todaysdate = "<date>" + str(datetime.now())[:10] + "</date>"
        os.chdir(newthemepath)
        replaceInFiles(newthemepath, "Child", name)
        replaceInFiles(newthemepath, "child", slug)
        replaceRegexInFiles(newthemepath, r"<date>[-0-9]+</date>", todaysdate)        

def replaceInFiles(path, pattern, replacement):
    for filepath in glob.iglob(os.path.join(path,'**','*'), recursive=True):
        if os.path.isfile(filepath):
            with open(filepath) as file:
                s = file.read()
                file.close()
                s = s.replace(pattern, replacement)
            with open(filepath, "w") as file:
                file.write(s)
                file.close()

def replaceRegexInFiles(path, regexpattern, replacement):
    for filepath in glob.iglob(os.path.join(path,'**','*'), recursive=True):
        if os.path.isfile(filepath):
            with open(filepath) as file:
                s = file.read()
                file.close()
                s = re.sub(regexpattern, replacement, s)
            with open(filepath, "w") as file:
                file.write(s)
                file.close()

    
main()