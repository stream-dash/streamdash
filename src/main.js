// @flow

import path from 'path';
import {app, BrowserWindow} from 'electron';

let mainWindow = null;

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('ready', () => {
  mainWindow = new BrowserWindow({width: 800, height: 600});
  mainWindow.loadURL('file://' + path.join(__dirname, '/views/index.html'));
  mainWindow.on('closed', () => {
    mainWindow = null;
  });
});
