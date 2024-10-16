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