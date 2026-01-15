# CSV Chart Viewer

This is a small web application built with [Next.js](https://nextjs.org) that allows users to upload a CSV file, select **two columns**, and visualize the data using interactive charts.

This project was bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

---

## Features

- Upload a CSV file containing any dataset.
- Select **two columns** from the uploaded CSV:
  - First column → X-axis (categorical or string)
  - Second column → Y-axis (must be numeric)
- Automatically render interactive charts using [Chart.js](https://www.chartjs.org), including:
  - Line
  - Area
  - Bar
  - Pie
  - Doughnut
  - Radar
  - Polar Area
- Dark mode ready with randomized colors for better visibility.
- Responsive design for desktop and mobile.
