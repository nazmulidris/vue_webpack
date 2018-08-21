/*
 * Copyright 2018 Nazmul Idris All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

'use strict';

import {app, protocol, BrowserWindow} from 'electron'
import * as path from 'path'
import {format as formatUrl} from 'url'
import {
    createProtocol,
    installVueDevtools
} from 'vue-cli-plugin-electron-builder/lib'

const isDevelopment = process.env.NODE_ENV !== 'production';

// global reference to mainWindow (necessary to prevent window from being garbage collected)
let mainWindow;

// Standard scheme must be registered before the app is ready
protocol.registerStandardSchemes(['app'], {secure: true});

function createMainWindow() {
    const window = new BrowserWindow();

    if (isDevelopment) {
        // Load the url of the dev server if in development mode
        window.loadURL(process.env.WEBPACK_DEV_SERVER_URL);
        if (!process.env.IS_TEST) {
            window.webContents.openDevTools()
        }
    } else {
        createProtocol('app');
        //   Load the index.html when not in development
        window.loadURL(
            formatUrl({
                          pathname: path.join(__dirname, 'index.html'),
                          protocol: 'file',
                          slashes: true
                      })
        )
    }

    window.on('closed', () => {
        mainWindow = null
    });

    window.webContents.on('devtools-opened', () => {
        window.focus();
        setImmediate(() => {
            window.focus()
        })
    });

    return window
}

// quit application when all windows are closed
app.on('window-all-closed', () => {
    // on macOS it is common for applications to stay open until the user explicitly quits
    if (process.platform !== 'darwin') {
        app.quit()
    }
});

app.on('activate', () => {
    // on macOS it is common to re-create a window even after all windows have been closed
    if (mainWindow === null) {
        mainWindow = createMainWindow()
    }
});

// create main BrowserWindow when electron is ready
app.on('ready', async () => {
    if (isDevelopment && !process.env.IS_TEST) {
        // Install Vue Devtools
        await installVueDevtools()
    }
    mainWindow = createMainWindow()
});
