// // ZipCodeContext.js
// import React, { createContext, useContext, useState } from 'react';

// const ZipCodeContext = createContext();

// export const useZipCode = () => useContext(ZipCodeContext);

// export const ZipCodeProvider = ({ children }) => {
//   const [zipCode, setZipCode] = useState('');

//   const updateZipCode = (newZipCode) => {
//     setZipCode(newZipCode);
//   };

//   return (
//     <ZipCodeContext.Provider value={{ zipCode, updateZipCode }}>
//       {children}
//     </ZipCodeContext.Provider>
//   );
// };
// // 