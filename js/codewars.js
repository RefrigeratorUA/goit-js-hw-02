// function duplicateCount(text) {
//   let buff = '';
//   for (let i = 0; i < text.length; i += 1) {
//     if (text.length > 1) {
//       for (let j = i + 1; j < text.length; j += 1) {
//         if (text[i].toLowerCase() === text[j].toLowerCase()) {
//           let count = 0;
//           for (let k = 0; k <= buff.length; k += 1) {
//             if (text[j].toLowerCase() === buff[k]) {
//               count = 0;
//               break;
//             } else {
//               count += 1;
//             }
//           }
//           if (count) {
//             buff += text[j].toLowerCase();
//           }
//         }
//       }
//     }
//   }
//   return buff.length;
// }

// function duplicateCount(text) {
//   return (
//     text
//       .toLowerCase()
//       .split('')
//       .sort()
//       .join('')
//       .match(/([^])\1+/g) || []
//   ).length;
// }
