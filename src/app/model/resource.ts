interface ResourceSupport {
  _links?: {
    [x: string]: {
      href: string,
      templated?: boolean;
    }
  };
}

export type Resource<T> = T & ResourceSupport;

export interface Resources<T> extends ResourceSupport {
  _embedded: {
    [x: string]: Resource<T>
  };
}
