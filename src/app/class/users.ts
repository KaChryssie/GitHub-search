export class Users {
    
    constructor (public login:string,public avatar_url:string,public html_url: string ,public company:string, public public_repos:number, public hireable:boolean,  public followers:number, public following:number){

        
        this.login = login;
        this.avatar_url = avatar_url;
        this.html_url = html_url;               
        this.company = company;
        this.public_repos = public_repos;
        this.hireable = hireable;
        this.followers = followers;
        this.following = following;

    }
}
