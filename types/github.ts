export interface IRepo {
    name?: string;
    description?: string;
    topics?: string[];
    languages_url?: string;
    homepage?: string;
    html_url?: string;
    created_at?: string;
    updated_at?: string;
};

// github repositories
export interface urls {
    website?: string;    // homepage
    github?: string;     // html_url
}
export interface coding_language {
    language?: string;
    amount?: number | unknown;
}
export interface repository {
    name?: string;                      //  name
    description?: string;               //  description
    topics?: string[];                  //  topics
    languages_url?: string;             //  languages_url
    urls?: urls;
    updated?: string;                   //  updated_at
    created?: string;                   //  created_at
}