import { parse } from "path";
import { useEffect, useState } from "react";


// navigation | routing
export interface page {
    url: string;
    name: string;
}

export interface svg {
    d: string;
    box: string;
}
export interface img {
    url: string;
    alt: string;
}

// // github repositories
// export interface urls {
//     website: string;
//     github: string;
// }
// export interface coding_language {
//     language: string;
//     amount: number;
// }
// export interface repository {
//     name: string;
//     updated: Date;
//     created: Date;
//     description: string;
//     urls: urls
//     languages: coding_language[]
//     topics: string[]
// }

    // const [width, setWidth] = useState<number>();
    // useEffect(() => {
    //     const handleResize = (event: UIEvent) => {
    //         const width = event.view?.innerWidth;
    //         width && width > 400 && width < 430 && setWidth(w => w = window.innerWidth);
    //     }
    //     window.addEventListener("resize", handleResize);
    //     return () => window.removeEventListener("resize", handleResize);
    // }, []);
