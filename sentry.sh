#!/bin/bash

SENTRY_AUTH_TOKEN=
SENTRY_ORG=
SENTRY_PROJECT=

VERSION=`sentry-cli releases propose-version`

sentry-cli releases -o $SENTRY_ORG new -p $SENTRY_PROJECT "$VERSION"
sentry-cli releases -o $SENTRY_ORG -p $SENTRY_PROJECT files "$VERSION" upload-sourcemaps "./dist"
sentry-cli releases -o $SENTRY_ORG -p $SENTRY_PROJECT set-commits --auto "$VERSION" 