package com.management.school.repositories;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.management.school.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
}