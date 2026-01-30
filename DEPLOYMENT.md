
# Deploying to Google Cloud Platform (GCP)

## Option 1: Google App Engine (Easiest)

1.  **Install Google Cloud CLI**: Download and install the [GCloud SDK](https://cloud.google.com/sdk/docs/install).
2.  **Initialize GCloud**: 
    ```bash
    gcloud init
    ```
3.  **Create a Project**:
    ```bash
    gcloud projects create shri-guhan-portfolio --set-as-default
    ```
4.  **Create App Engine Instance**:
    ```bash
    gcloud app create --region=us-central
    ```
5.  **Deploy**:
    ```bash
    gcloud app deploy
    ```
    *This will use the `app.yaml` file provided in the root.*

## Option 2: Google Cloud Run (Containerized)

1.  **Build and push the image**:
    ```bash
    gcloud builds submit --tag gcr.io/[PROJECT_ID]/portfolio
    ```
2.  **Deploy to Cloud Run**:
    ```bash
    gcloud run deploy portfolio --image gcr.io/[PROJECT_ID]/portfolio --platform managed --allow-unauthenticated
    ```

## Environment Variables
Ensure you add your `MONGODB_URI` in the GCP Console under **App Engine > Settings > Environment Variables** or within the `app.yaml` (not recommended for secrets).
