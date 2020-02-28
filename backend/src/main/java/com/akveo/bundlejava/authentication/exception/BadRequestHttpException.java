package com.akveo.bundlejava.authentication.exception;

import com.akveo.bundlejava.exception.HttpException;
import org.springframework.http.HttpStatus;

public class BadRequestHttpException extends HttpException {
    private static final long serialVersionUID = -5202433948475658078L;

    public BadRequestHttpException() {
        super("Bad request", HttpStatus.BAD_REQUEST);
    }
}
