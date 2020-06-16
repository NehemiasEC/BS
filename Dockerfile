FROM python:3
ENV PYTHONUNBUFFED 1
RUN mkdir /code
WORKDIR /code
COPY backend/requirements.txt /code/
RUN pip install -r requirements.txt
COPY . /code/