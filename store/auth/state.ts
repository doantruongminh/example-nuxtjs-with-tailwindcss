export interface IAuthState {
    token: string;
  }
  
  export default (): IAuthState => ({
    token: '',
  });
  