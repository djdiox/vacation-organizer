FROM node:8.11.4

WORKDIR /app/

EXPOSE 3000 35729
COPY ../docs /app/docs
COPY docusaurus /app/docusaurus
RUN yarn install

CMD ["yarn", "start"]
