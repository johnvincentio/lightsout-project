
## Use Serve

This could not handle the CORS requirement.

Included here for reference only.

```
npm init
npm i serve --save

 "serve": "serve -l 9002 Yoga",

npm run serve
```

Access-Control-Allow-Origin: *

self.send_header('Access-Control-Allow-Origin', '*')

https://github.com/zeit/serve-handler#options

{
  "headers": [
    {
      "source": "**/*.@(jpg|jpeg|gif|png)",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "max-age=7200"
        }
      ]
    },
    {
      "source": "404.html",
      "headers": [
        {
          "key": "Cache-Control",
          "value": "max-age=300"
        }
      ]
    }
  ]
}

