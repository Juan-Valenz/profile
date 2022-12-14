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
    amount?: number;
}
export interface repository {
    name?: string;                      //  name
    description?: string;               //  description
    topics?: string[];                  //  topics
    languages?: coding_language[];      //  languages_url
    urls?: urls;
    updated?: Date;                     //  updated_at
    created?: Date;                     //  created_at
}