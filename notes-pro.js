/* PrinceXmahto Study — topic note priority layer
   IMPORTANT: This file must never manufacture generic lesson content.
   Rich topic-specific material from notes-deep.js / notes-depth.js / notes-final.js
   and other dedicated files must be allowed to take priority.
*/
(function(){
  const L = window.PX_LESSONS || (window.PX_LESSONS = {});
  Object.keys(L).forEach(topic => {
    const note = L[topic];
    if (!note) return;
    note.sections = Array.isArray(note.sections) ? note.sections : [];
    note.longForm = true;
    note.pageTarget = note.pageTarget || 'content-based';
  });
  window.PX_LESSONS = L;
})();
