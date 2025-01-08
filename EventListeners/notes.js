-> event is an announcement basically. jaise window pe click kiya to vo ek event h, scroll kiya to vo ek event h.
-> event k baare m browser batata h mtlb browser bolega ki click hua h aur jispe click hoga ya event hoga vo event target kehlata h
-> event k 3 phase hote h - capturing(root ele se target ele ki taraf), at target, bubbling(target ele se root ele ki taraf). event
   listener by default bubbling phase m apply hota h. isko change kiya ja skta h.

   Syntax: para.addEventListener('click', performAction, true) isme 3rd parameter 'useCapture' hota h usko apan n true mark kr diya to ab event
   listener capturing phase m aa gya.

-> jab bhi event hota h to vo event listener ko mil jaata h aur usko apan event listener k function m as an i/p arg use kr skte h

-> default action: apan kisi ka default behaviour change kr skte h
   ex: jaise jo <a> tag h to uska default beh h ki vo kisi link pe leke jaayega to apan usko change kr skte h using 'preventDefault()'.

-> 'target' => property ka use kr k apan jis par event hua h uski aur details nikal skte h
-> 'nodeName' => naam ki prop bhi hoti h usse apan ko ele ka tag pta chalta h
