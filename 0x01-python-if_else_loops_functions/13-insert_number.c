#include "lists.h"

/**
 * insert_node - inserts number into sorted list
 * @head: pointer to the list
 * @number: number to add
 * Return: address of the added node else NULL
 */
listint_t *insert_node(listint_t **head, int number)
{
	listint_t *first, *last, *current;

	if (head == NULL)
		return (NULL);

	last = malloc(sizeof(listint_t));
	if (last == NULL)
		return (NULL);

	last->n = number;
	first = NULL;
	current = *head;

	for (; current != NULL && current->n < number;)
	{
		first = current;
		current = current->next;
	}

	last->next = current;

	if (first != NULL)
		first->next = last;
	else
		*head = last;
	return (last);
}
