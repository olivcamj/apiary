const contentful = require('contentful');



export const client = (id) => {
    const client = contentful.createClient({
        space: 'xxypyrafqty8',
        accessToken: 'sJ7oHmvPDsMDVe4jCw3-lvtY69MRUnZAiH8RgD5TJXk'
    })

    const res = client.getEntries({ content_type: id === '' ? 'projects' : id})
        .then(data => {return data})
        
    return res;
}