/**
 * Simulate an error for test purposes.
 * Throws an error to demonstrate error handling in the app.
 */
import React from 'react';

function TriggerError() {
  throw new Error('This is a simulated test error');
}

function TestErrorComponent() {
  try {
    TriggerError();
    return <div>No error triggered.</div>;
  } catch (e) {
    return <div className="error-message">Caught error: {e.message}</div>;
  }
}

export default TestErrorComponent;
