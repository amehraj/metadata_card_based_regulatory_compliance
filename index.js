// Copyright 2025 Tampere University
// This source code is licensed under the MIT license. See LICENSE in the repository root directory.
// Author: Ali Mehraj <ali.mehraj@tuni.fi>

const express = require('express');
const { regulatory_requirements_check } = require('./src//regulatory_requirements_check');

const app = express();
const PORT = 3000;

regulatory_requirements_check();

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
