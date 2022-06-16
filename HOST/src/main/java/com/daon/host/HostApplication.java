package com.daon.host;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.builder.SpringApplicationBuilder;
import org.springframework.boot.web.servlet.support.SpringBootServletInitializer;
import org.springframework.context.annotation.EnableAspectJAutoProxy;

@SpringBootApplication
public class HostApplication extends SpringBootServletInitializer{
	
	public static void main(String[] args) {
		SpringApplication.run(HostApplication.class, args);
	}
	//war 배포할떄 추가
	@Override
	protected SpringApplicationBuilder configure(SpringApplicationBuilder builder) 
	{
		return builder.sources(HostApplication.class);
	}
}