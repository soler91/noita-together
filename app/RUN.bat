@echo off
title uni
cd /d "%~dp0"

npm run electron:serve
@PAUSE