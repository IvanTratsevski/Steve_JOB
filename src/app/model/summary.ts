export interface Summary {
    id?: number;
    name?: string;
    category?: string;
    description?: string;
    img?: string;
    employer:{
      logo_urls: {
        original: any
      }
    };
  }