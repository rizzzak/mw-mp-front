
export const pathsPublic: { [k: string]: string } = { home: '/', }

export const pathsPrivate: { [k: string]: string } = { accountSettings: '/account-settings'}

export const paths: { [k: string]: string } = Object.assign({}, pathsPublic, pathsPrivate);

//check if pathname matches to one of given key from paths argument

export const checkPathMatch = (pathname: string, paths: { [k : string]: string},) =>
{
    let isMatch = false
    // allPaths = ['/', '/account-settings']
    const allPaths = Object.keys(paths).map((k) => paths[k])
    const pathFirstSection = pathname.split('/')[1]
    //pathname.split('/'): '/pages/home' => ['', 'pages', 'home']
    //p.slice(1) - delete first /: '/home' => 'home'
    allPaths.forEach((p) => {
        if (p.slice(1) === pathFirstSection) isMatch = true
    })
    return isMatch
}