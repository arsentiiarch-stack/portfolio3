# Project Images

Place your project images here in subfolders:

```
public/projects/
  project-01/
    cover.jpg
    image-01.jpg
    image-02.jpg
  project-02/
    cover.jpg
    ...
```

Then reference them in `src/data/projects.json`:

```json
{
  "id": "project-01",
  "cover": "/projects/project-01/cover.jpg",
  "images": [
    "/projects/project-01/image-01.jpg",
    "/projects/project-01/image-02.jpg"
  ]
}
```
