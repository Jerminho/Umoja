import React from 'react';

const GoogleForms = () => {
  return (
    <div className="google-forms-container">
  {/* Become a Member Form */}
  <div className="google-form-item">
    <h2 className="google-form-title">Become a Member</h2>
    <object
      data="https://docs.google.com/forms/d/e/1FAIpQLSdEt19BKsrLc9Bw9OxgKqwfeFggpIyIAsw9-6ZrrS6ACP3tkw/viewform?embedded=true"
      type="text/html"
      width="200%"
      height="600"
      title="Become a Member"
      className="google-form-embed"
    >
      Your browser does not support embedding Google Forms. 
      <a href="https://docs.google.com/forms/d/e/1FAIpQLSdEt19BKsrLc9Bw9OxgKqwfeFggpIyIAsw9-6ZrrS6ACP3tkw/viewform" target="_blank" rel="noopener noreferrer">
        Click here to fill out the form.
      </a>
    </object>
  </div>
</div>
  );
};

export default GoogleForms;
