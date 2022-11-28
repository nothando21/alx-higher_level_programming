#include "lists.h"

/**
 * check_cycle - checks if linked list has a cycle
 * @list: linked list
 * Return: 0 if no cycle, 1 if there is a cycle
 */

int check_cycle(listint_t *list)
{
	listint_t *first, *check;

	if (list == NULL || list->next == NULL)
		return (0);
	first = list;

	check = first->next;
	while (first != NULL && check->next != NULL
		&& check->next->next != NULL)
	{
		if (first == check)
			return (1);
		first = first->next;
		check = check->next->next;
	}
	return (0);
}
