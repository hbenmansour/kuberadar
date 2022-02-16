package com.example.demo;

import java.util.List;

import org.springframework.data.repository.PagingAndSortingRepository;
import org.springframework.data.repository.query.Param;
import org.springframework.data.rest.core.annotation.RepositoryRestResource;


@RepositoryRestResource(collectionResourceRel = "distribs", path = "distribs")
public interface KubeDistribRepository extends PagingAndSortingRepository<KubeDistrib, Long> {
    List<KubeDistrib> findByName(@Param("name") String name);
}
