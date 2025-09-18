FROM node:22-alpine
RUN mkdir -p /usr/app
WORKDIR /usr/app

COPY ./ ./ 
RUN npm ci 
RUN npm run build

RUN cp -r ./dist ./server/public
RUN cd server && npm ci

CMD ["node", "server/index.js"]