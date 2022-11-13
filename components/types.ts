

// navigation | routing
export interface page {
    url: string;
    name: string;
    img: img;
}

export interface svg {
  d: string;
  box: string;
}
export interface img {
    url: string;
    alt: string;
    width: number;
    height: number;
}

// github repositories
export interface urls {
    website: string;
    github: string;
}
export interface coding_language {
    language: string;
    amount: number;
}
export interface repository {
    name: string;
    updated: Date;
    created: Date;
    description: string;
    urls: urls
    languages: coding_language[]
    topics: string[]
}