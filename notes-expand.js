/* PrinceXmahto Study — natural classroom notes layer
   Intentionally does not manufacture repetitive mini-chapters.
   Subject-specific content is supplied by the dedicated note files.
   Keeping this layer passive prevents the notes from sounding like a template.
*/
(function(){
  const L = window.PX_LESSONS || (window.PX_LESSONS = {});
  Object.keys(L).forEach(topic => {
    const note = L[topic];
    if (!note) return;
    note.sections = Array.isArray(note.sections) ? note.sections : [];
    note.longForm = true;
    // A descriptive flag only; page count is determined by real content and print layout.
    note.pageTarget = note.pageTarget || 'content-based';
  });
  window.PX_LESSONS = L;
})();
