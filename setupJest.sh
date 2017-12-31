#!/bin/bash
git clone https://github.com/orta/vscode-jest
cd vscode-jest
yarn install
cd ..
git clone https://github.com/facebook/jest.git
cd jest
yarn install
cd packages/jest-editor-support
yarn link
cd ../../..
cd vscode-jest
yarn link jest-editor-support