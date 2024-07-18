package com.example.be.controller;

import com.example.be.dto.SuccessDto;
import com.example.be.dto.TodosDto;
import com.example.be.entity.Todos;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Repository;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.List;

@RestController
@RequestMapping("/api/todos")
public class TodosController {

    private final TodosRepository todosRepository;

    public TodosController(TodosRepository todosRepository) {
        this.todosRepository = todosRepository;
    }

    @PostMapping
    public ResponseEntity<TodosDto> createTodo(@RequestBody TodosDto todo) {
        Todos todos = new Todos();
        todos.setTitle(todo.getTitle());
        todos.setDone(todo.isDone());
        Todos savedTodos = todosRepository.save(todos);
        TodosDto savedTodo = new TodosDto();
        savedTodo.setTitle(savedTodos.getTitle());
        savedTodo.setDone(savedTodos.isDone());
        savedTodo.setId(savedTodos.getId());
        return new ResponseEntity<>(savedTodo, HttpStatus.CREATED);
    }

    @GetMapping
    public ResponseEntity<List<TodosDto>> getTodos() {
        List<Todos> todos = todosRepository.findAll();
        List<TodosDto> todosDto = new ArrayList<>();
        for (Todos todo : todos) {
            TodosDto dto = new TodosDto();
            dto.setTitle(todo.getTitle());
            dto.setDone(todo.isDone());
            dto.setId(todo.getId());
            todosDto.add(dto);
        }
        return new ResponseEntity<>(todosDto, HttpStatus.OK);
    }

    @PutMapping
    public ResponseEntity<SuccessDto> updateTodo(@RequestBody TodosDto todo) {
        Todos todos = new Todos();
        todos.setTitle(todo.getTitle());
        todos.setDone(todo.isDone());
        todos.setId(todo.getId());
        todosRepository.save(todos);
        SuccessDto successDto = new SuccessDto();
        successDto.setSuccessMessage("Todo successfully updated");
        return new ResponseEntity<>(successDto, HttpStatus.OK);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<SuccessDto> deleteTodo(@PathVariable Long id) {
        todosRepository.deleteById(id);
        SuccessDto successDto = new SuccessDto();
        successDto.setSuccessMessage("Todo successfully deleted");
        return new ResponseEntity<>(successDto, HttpStatus.OK);
    }

}

@Repository
interface TodosRepository extends JpaRepository<Todos, Long> {
    @Query("select t from Todos t order by t.id")
    List<Todos> findAll();
}
