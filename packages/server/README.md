# Server

This is the primary API Server for our service

Authentication is going to be handled via JWT, This isn't the most secure but will get the initial job done, We would set an expiry on the token 

We are going to be using MySQL as our primary database since we need to associate scenes, user perms, allowed actions  The videos are going to be stored in some kind of bucket. We might need to use some other mechanism to store the 3D scene data. An idea that comes to mind is **3DScript**, essentially we create our own implementation of a 3D renderer and have it be controlled by a 3D script 

```
==Back-End==
| 3DScript | <- the api uses this to serialize 3D binary data to 3DScript
===========
```

## API

This doesn't include all, just the primary responses

### POST /v1/scene/uploads

```JavaScript
{
  "status": "success",
  "data": {
    "video_url": /* URL */,
    "video_name": /* Filename */,
    "video_size": /* Size in Kb */
  },
  "message": "Request completed successfully.",
  "metadata": { }
}
```

### POST /v1/scene

```JavaScript
{
  "scene_name": "My Virtual World",
  "scene_description": "A 3D representation of a closed environment",
  "user_id": "6789",
  "scene_data": {
    "format": "glTF",
    "file_url": "https://example.com/uploads/scene12345.gltf",
    
    // OR 
    
    "format": "3ds",
    "content": /* undecided syntax */,
  }
}
```

```JavaScript
{
  "status": "success",
  "data": {
    "scene_id": "12345",
    "scene_name": "My Virtual World",
    "scene_status": "processing",
  },
  "message": "Request completed successfully.",
  "metadata": {
    "queue_position": 5,
    "estimated_time": "10 minutes"
  }
}
```
