(function(){
      emailjs.init("XIHhVxe2Cid5ZbQ2A");
      })();

function sendMail(e) {
    if (e && typeof e.preventDefault === 'function') e.preventDefault();

    const params = {
        // match the variable names used in your EmailJS template
        name: document.getElementById("name")?.value || '',
        email: document.getElementById("email")?.value || '',
        phone: document.getElementById("phone")?.value || '',
        service: document.getElementById("service")?.value || '',
        message: document.getElementById("message")?.value || ''
    };

    // UI: disable submit if present
    const submitBtn = document.querySelector('button[type="submit"]');
    if (submitBtn) submitBtn.disabled = true;

    // EDIT: set the exact service/template IDs you use in EmailJS
    const SERVICE_ID = 'service_o0csc3x';      // <-- replace if different
    const TEMPLATE_ID = 'template_pstzh6f';    // <-- replace if different

    // Send and handle response
    emailjs.send(SERVICE_ID, TEMPLATE_ID, params)
      .then(() => {
        alert("Quote Sent!");
        // optionally reset form:
        document.getElementById("contactForm")?.reset();
      })
      .catch(err => {
        console.error('EmailJS send error:', err);
        alert("Failed to send. Check console and EmailJS logs.");
      })
      .finally(() => {
        if (submitBtn) submitBtn.disabled = false;
      });

    return false;
}
