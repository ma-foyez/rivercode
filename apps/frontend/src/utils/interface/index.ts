export interface IAsset {
    asset: {
        _ref: string;
        _type: string;
    };
    _type: string;
}

export interface ISlug {
    current: string;
    slug: {
        current?: string;
        _type?: string;
    };
}


export interface ICompany {
    title: string;
    logo: IAsset
  }

  
export interface IProject {
    banner: IAsset;
    title: string;
    description: string;
}

export interface ITestimonial {
    profile?: IAsset
    author: string;
    message: string;
    rating: number | string;
}


export interface IDepartment {
    banner: IAsset;
    department: string;
    description: string;
}