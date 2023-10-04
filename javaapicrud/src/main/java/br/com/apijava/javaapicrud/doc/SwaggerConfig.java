package br.com.apijava.javaapicrud.doc;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.info.Info;
import io.swagger.v3.oas.models.info.License;

@Configuration
public class SwaggerConfig {

    @Bean
    public OpenAPI customAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("API Java CRUD")
                        .description("API para realizar operações CRUD em Java")
                        .version("1.0")
                        .license(new License().name("Feito por Jhonatan Faelis")));
    }
}
