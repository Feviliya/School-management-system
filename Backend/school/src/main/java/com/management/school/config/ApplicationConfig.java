package com.management.school.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.AuthenticationProvider;
import org.springframework.security.authentication.dao.DaoAuthenticationProvider;
import org.springframework.security.config.annotation.authentication.configuration.AuthenticationConfiguration;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import com.management.school.repositories.UserRepository;

import lombok.RequiredArgsConstructor;

@Configuration
@RequiredArgsConstructor
public class ApplicationConfig {
    @Autowired
    private final UserRepository userRepository;

    // 1.
    @Bean // This method repesents a Bean, Bean should always be public not private
    public UserDetailsService userDetailsService() {
        return username -> userRepository.findByEmail(username)
                .orElseThrow(() -> new UsernameNotFoundException("User not found"));
    }

    // 2.
    @Bean
    public AuthenticationProvider authenticationProvider() {
        // 3. DatAccessObject which is responsible to fetch user details, encode
        // password and etc..
        DaoAuthenticationProvider authProvider = new DaoAuthenticationProvider();
        // 4. We need to tell userDetailsService to use in order to fetch info about our
        // user
        authProvider.setUserDetailsService(userDetailsService());
        // 5. We need to provide password encoder
        authProvider.setPasswordEncoder(passwordEncoder());
        return authProvider;
    }

    // 7. AuthenticationManager is the one responsible for managing authentication
    // There are several methods provided by manager which will be used to
    // authenticate user, so on...
    @Bean
    public AuthenticationManager authenticationManager(AuthenticationConfiguration authenticationConfiguration)
            throws Exception {
        return authenticationConfiguration.getAuthenticationManager();
    }

    // 6.
    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
}