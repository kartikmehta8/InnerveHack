<p align="center">
  <img src="https://user-images.githubusercontent.com/77505989/192952109-97272b53-bc26-4288-82e7-cafc3e72170c.png" alt="BANNER" />
</p>

## Working

- Run `yarn install`
- Setup `.env`, using sample provided at `sample.env`
- Run `gcloud auth application-default login`
- Make sure you create your Google Cloud Storage Bucket. Ex: `sample-name`
- Make the `sample-name` bucket objects' read permission as public (so anyone can see the images uploaded)
- Run `yarn start:dev`


<!--
## Deploy setup

- Install gcloud sdk
- Add your `keys.json` at `~/.config/gcloud`
- Make sure you create your gcs bucket. Ex: `sample-name`
- Make the `sample-name` gcs bucket objects' read permission as public
- Run `gcloud auth application-default login`
- Run `gcloud app deploy deploy.yml`
-->
