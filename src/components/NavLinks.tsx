// import React from 'react';
// import Links from 'next/link'    

// // interface NavlinksProps {
// //     slug: string
// //     title: React.ReactNode
// //     topicId: string | null
// //     url: string 
// //     scrapable: boolean
// // }

// const Navlinks = async() => {
//     const res = await fetch("https://api.api-store.workers.dev/api/bazardor/categories");
//     const data = await res.json();   
//     const nav = data.data;
//     // const filteredNav = nav.filter((n) => n.scrapable);
//     return (    
//         <div className="flex items-center justify-center gap-4 p-2">
            
//             <Links href={"/"}>হোম</Links>

//             {
//                 nav.map((n, i) => <Links key={i} href={`/category/${n.slug}`}>{n.nameBn}</Links>)    
//             }
//         </div>
//     );
// };

// export default Navlinks;