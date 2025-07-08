package com.SDAIA.backend.repository;

import com.SDAIA.backend.model.MenuItem;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import java.util.List;

public interface MenuRepository extends JpaRepository<MenuItem, Long> {

    @Query(value = """
                SELECT * FROM menu_item m1
                WHERE (
                    SELECT COUNT(*) FROM menu_item m2
                    WHERE m2.category = m1.category AND m2.calorie > m1.calorie
                ) = 1
            """, nativeQuery = true)
    List<MenuItem> findSecondHighestCaloriePerCategory();

}
