FROM golang:1.20.6-alpine AS build
WORKDIR /go/src/
COPY ./app .
RUN go build -ldflags="-s -w" -o /hello

FROM scratch
COPY --from=build /hello /hello
ENTRYPOINT [ "/hello" ]