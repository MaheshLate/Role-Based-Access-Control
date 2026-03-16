package com.example.security;

import java.security.Key;
import java.util.Date;

import org.springframework.stereotype.Component;
import com.example.repository.UserRepository;
import io.jsonwebtoken.*;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtTokenProvider {

    private final UserRepository userRepository;

    private final String jwtSecret = "mysecretkeymysecretkeymysecretkey";

    private final long jwtExpiration = 86400000;

    JwtTokenProvider(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    private Key getSigningKey() {
        return Keys.hmacShaKeyFor(jwtSecret.getBytes());
    }

    public String generateToken(String email) {

        Date now = new Date();

        Date expiryDate = new Date(now.getTime() + jwtExpiration);

        return Jwts.builder()
                .setSubject(email)
                .setIssuedAt(now)
                .setExpiration(expiryDate)
                .signWith(getSigningKey())
                .compact();
    }

    public String getEmail(String token) {

        Claims claims = Jwts.parserBuilder()
                .setSigningKey(getSigningKey())
                .build()
                .parseClaimsJws(token)
                .getBody();

        return claims.getSubject();
    }

    public boolean validateToken(String token) {

        try {

            Jwts.parserBuilder()
                    .setSigningKey(getSigningKey())
                    .build()
                    .parseClaimsJws(token);

            return true;

        } catch (Exception ex) {

            return false;
        }
    }
}