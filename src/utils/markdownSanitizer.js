import { marked } from "marked";
import sanitizedHtml from "sanitize-html";
import TurndownService from "turndown";

function sanitizeMarkDown(markdownContent){

    const turndownService = new TurndownService()

    //1. Convert markdown into Html
    const convertedHtml = marked.parse(markdownContent)
    console.log(convertedHtml)

    //2. Sanitize HTML 
    const sanitizeHtml = sanitizedHtml(convertedHtml,{
        allowedTags: sanitizedHtml.defaults.allowedTags.concat('img')
    })
    console.log(sanitizeHtml)

    //3. will convert theq HTML into markdown and will return sanitised markdown
    return turndownService.turndown(sanitizeHtml)
}

export default sanitizeMarkDown

