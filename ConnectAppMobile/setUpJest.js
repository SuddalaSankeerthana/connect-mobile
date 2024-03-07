require('jest-fetch-mock').enableMocks()
global.fetch = require('jest-fetch-mock');
import '@testing-library/jest-dom';
import fetchMock from "jest-fetch-mock";
fetchMock.enableMocks();