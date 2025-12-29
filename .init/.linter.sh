#!/bin/bash
cd /home/kavia/workspace/code-generation/note-manager-301878-301887/notes_app_frontend
npm run build
EXIT_CODE=$?
if [ $EXIT_CODE -ne 0 ]; then
   exit 1
fi

