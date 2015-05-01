FROM node:0.10-onbuild

RUN git clone https://github.com/wbeard/florida /app

# Install app dependencies
RUN cd /app; npm install; npm run bundle

EXPOSE  8000
CMD ["npm", "start"]
